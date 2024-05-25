import Image from "next/image";

import EventCard from "@/components/event-card/event-card";
import { SectionTitle } from "@/components/section-title/section-title";
import { Button } from "@/components/ui/button";
import {
  createResponseSchema,
  generateEmptyResponse,
} from "@/models/cms-response";
import { Event } from "@/models/events";

const fetchEvents = async () => {
  const eventsRes = await fetch(
    "https://admin.csipro.isi.unison.mx/api/eventos",
    { cache: "no-store" },
  );

  if (!eventsRes.ok) {
    return generateEmptyResponse();
  }

  const EventsResponse = createResponseSchema(Event);

  const eventsData = await eventsRes.json();

  const events = EventsResponse.safeParse(eventsData);

  return events.success ? events.data : generateEmptyResponse();
};

export default async function Home() {
  const eventsRes = await fetchEvents();

  const events = eventsRes.docs;

  const event = events[0];

  const eventDate = new Date(event.fecha);

  return (
    <>
      <div className="flex w-full flex-col items-center gap-4 sm:flex-row">
        <div className="px-4 py-6">
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Un espacio de <span className="text-primary">desarrollo</span>,
            <span className="text-primary"> innovación</span> e
            <span className="text-primary"> investigación</span> en la
            Universidad de Sonora
          </h1>
        </div>
        <div className="max-w-full px-4 py-6 sm:max-w-2xl">
          <Image
            src="portada.jpg"
            width={500}
            height={300}
            alt="foto de portada"
            className="rounded"
            unoptimized
          />
        </div>
      </div>
      <section>
        <SectionTitle>¿QUIÉNES SOMOS?</SectionTitle>
        <div className="flex w-full flex-col items-center gap-3 px-2">
          <div className="relative w-fit">
            <Image
              src="nosotros.JPG"
              width={500}
              height={300}
              alt="foto de portada"
              className="rounded"
              unoptimized
            />
            <div className="animate-floating absolute -left-1.5 top-10 rounded bg-[#0074F9] p-1.5 shadow-md shadow-black/25">
              5 proyectos activos
            </div>

            <div className="animate-floating absolute -right-1.5 top-[60%] rounded bg-[#00C792] p-1.5 shadow-md shadow-black/25">
              Fundado en 2014
            </div>

            <div className="animate-floating absolute -left-1.5 bottom-12 rounded bg-primary p-1.5 shadow-md shadow-black/25">
              38 miembros
            </div>
          </div>
          <p className="text-lg">
            Somos estudiantes de la Universidad de Sonora en la búsqueda de
            innovar. Realizamos e implementamos tecnologías, tales como software
            desarrollado por nosotros
          </p>

          <Button variant="outline" className="text-base">
            Más de nosotros
          </Button>
        </div>
      </section>

      <section className="w-full">
        <SectionTitle>Nuevos eventos</SectionTitle>
        <div className="flex flex-col items-center gap-3 px-2 sm:flex-row sm:justify-center">
          <EventCard
            title={event.titulo}
            type={event.tipo}
            date={eventDate}
            duration={event.duracion}
            image={`https://admin.csipro.isi.unison.mx${event.imagen_principal.url}`}
            imageAlt={event.imagen_principal.alt}
            spots={event.cupos}
            location={event.lugar}
            time={new Date(event.hora)}
          />
          <EventCard
            title={event.titulo}
            type={event.tipo}
            date={eventDate}
            duration={event.duracion}
            image={`https://admin.csipro.isi.unison.mx${event.imagen_principal.url}`}
            imageAlt={event.imagen_principal.alt}
            spots={event.cupos}
            location={event.lugar}
            time={new Date(event.hora)}
          />
          <EventCard
            title={event.titulo}
            type={event.tipo}
            date={eventDate}
            duration={event.duracion}
            image={`https://admin.csipro.isi.unison.mx${event.imagen_principal.url}`}
            imageAlt={event.imagen_principal.alt}
            spots={event.cupos}
            location={event.lugar}
            time={new Date(event.hora)}
          />
        </div>
      </section>
    </>
  );
}
