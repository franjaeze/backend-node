


export default class NotesController {
    constructor() {
      this.header = { 'content-type': 'application/json' }
      this.body = {}
    }


    getItems = async (req, res) => {
        try {
          /* const obtener = new ObtenerEmpleados()
          const resultado = await obtener.run() */
          res.status(200).json("llego todo ok por aca en Notes");
        } catch (error) {
          console.log(error);
          res.status(500).json({ mensaje: 'Error al obtener los empleados' });
        }
      };
    

}