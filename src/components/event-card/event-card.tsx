import { format } from "date-fns";
import { es } from "date-fns/locale";
import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";

import {
  BrandingHeader,
  BrandingHeaderHighlight,
  BrandingHeaderTitle,
} from "../branding-header/branding-header";

interface EventCardProps {
  type: string;
  date: string;
  image: string;
  imageAlt: string;
  spots?: number;
  title: string;
  duration: number;
  location: string;
}

const EventCard: React.FC<EventCardProps> = (props) => {
  return (
    <div className="max-w-sm rounded border border-primary bg-[#160D2A] p-4">
      <div className="flex select-none justify-between">
        <BrandingHeader>
          <BrandingHeaderTitle>CSI PRO</BrandingHeaderTitle>
          <BrandingHeaderHighlight>{props.type}</BrandingHeaderHighlight>
        </BrandingHeader>
        <div>
          <h1 className="bg-primary px-1 text-lg font-semibold uppercase text-white">
            {format(props.date, "dd MMM", { locale: es })}
          </h1>
        </div>
      </div>
      <div className="relative py-4">
        <Image
          layout="responsive"
          src={props.image}
          width={500}
          height={300}
          alt={props.imageAlt}
          className="rounded"
          unoptimized
        />
        <div className="absolute bottom-4 right-0 rounded-tl bg-primary px-1 text-white">
          {props.spots === 1 ? (
            <span>{props.spots} cupo disponible</span>
          ) : (
            <span>{props.spots} cupos disponibles</span>
          )}
        </div>
      </div>
      <h1 className={"select-text text-2xl font-semibold text-white"}>
        {props.title}
      </h1>
      <hr className="border-1 my-4 border-primary" />
      <div className="flex items-center justify-between text-sm font-semibold text-white">
        <span>{props.location}</span>
        <span>1:00 p.m. - 2:00 p.m.</span>
      </div>
      <div className="mt-4 flex justify-center">
        <Button variant="outline">Registrate aquí</Button>
      </div>
    </div>
  );
};

export default EventCard;
