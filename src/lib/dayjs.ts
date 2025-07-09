import lib from 'dayjs';
import 'dayjs/locale/pt-br';
import relative from 'dayjs/plugin/relativeTime';

lib.extend(relative);
lib.locale('pt-br');

export const dayjs = lib;
