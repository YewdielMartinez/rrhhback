import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Wrapper<T> {
  responseCode: number;
  result: T[] | null;
  message: string;
}

export interface SingleWrapper<T> {
  responseCode: number;
  result: T | null;
  message: string;
}

@Injectable()
export class ResponseWrapperInterceptor<T> implements NestInterceptor<T, Wrapper<T> | SingleWrapper<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Wrapper<T> | SingleWrapper<T>> {
    return next.handle().pipe(
      map((data) => {
        const isArray = Array.isArray(data);
        return {
          responseCode: 200,
          result: data,
          message: isArray ? 'Lista obtenida con éxito' : 'Operación exitosa',
        } as Wrapper<T> | SingleWrapper<T>;
      }),
    );
  }
}
