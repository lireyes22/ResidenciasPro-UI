import { DateTime } from "luxon";

export default function formatFecha (fechaElaboracion: string) {
    const fecha = DateTime.fromISO(fechaElaboracion, { locale: 'es' });
    const format= fecha.toLocaleString(DateTime.DATE_FULL);
    if(format === 'Invalid DateTime') return "";
    return fecha.toLocaleString(DateTime.DATE_FULL);
}