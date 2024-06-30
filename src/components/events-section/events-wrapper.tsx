"use client";

import { FC, ReactNode } from "react";
import { useMediaQuery } from "usehooks-ts";

import { Event } from "@/models/events";

import { EventsPagination, EventsPaginationProps } from "./events-pagination";
import EventCard from "../event-card/event-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "../ui/carousel";

interface EventsWrapperProps extends EventsPaginationProps {
  events: Array<Event>;
}

export const EventsWrapper: FC<EventsWrapperProps> = ({
  events,
  ...paginationProps
}) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return isDesktop ? (
    <DesktopEvents {...paginationProps}>
      {events.map((event) => (
        <EventCard
          key={event.id}
          title={event.titulo}
          type={event.tipo}
          dates={event.fechas_horas}
          duration={event.duracion}
          image={`https://admin.csipro.isi.unison.mx${event.imagen_principal.url}`}
          imageAlt={event.imagen_principal.alt}
          spots={event.cupos - event.asistentes.length}
          location={event.lugar}
        />
      ))}
    </DesktopEvents>
  ) : (
    <MobileEvents>
      {events.map((event) => (
        <CarouselItem key={event.id} className="basis-5/6 sm:basis-3/4">
          <EventCard
            title={event.titulo}
            type={event.tipo}
            dates={event.fechas_horas}
            duration={event.duracion}
            image={`https://admin.csipro.isi.unison.mx${event.imagen_principal.url}`}
            imageAlt={event.imagen_principal.alt}
            spots={event.cupos - event.asistentes.length}
            location={event.lugar}
          />
        </CarouselItem>
      ))}
    </MobileEvents>
  );
};

interface DesktopEventsProps extends EventsPaginationProps {
  children: ReactNode;
}

const DesktopEvents: FC<DesktopEventsProps> = ({
  children,
  ...paginationProps
}) => {
  return (
    <>
      <div className="flex w-full flex-col items-center gap-3 px-4 sm:grid sm:grid-cols-2 sm:items-center sm:justify-items-center sm:gap-4 lg:grid-cols-3">
        {children}
      </div>
      <EventsPagination {...paginationProps} />
    </>
  );
};

interface MobileEventsProps {
  children: ReactNode;
}

const MobileEvents: FC<MobileEventsProps> = ({ children }) => {
  return (
    <Carousel>
      <CarouselContent>{children}</CarouselContent>
      <CarouselNavigation name="events" />
    </Carousel>
  );
};
