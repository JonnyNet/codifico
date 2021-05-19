import { Row } from './row';

export interface StateTable{
    data: Row[];
    genre: { id: string; name: string }[];
}
