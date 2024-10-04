export class SendUsuarioDto{
  idUsuario: number;
  nombreUsuario: string;
  correo: string;
  idEmpleado: number | null;
  createdate: Date | null;
  updatedate: Date | null;
}