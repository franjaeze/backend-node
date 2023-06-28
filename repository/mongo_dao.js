
import {MongoClient, ObjectId} from 'mongodb'


export class Mongo_dao {
  constructor() {
    this.uri = process.env.MONGO_URI
    this.cliente = new MongoClient(this.uri)
    this.dbName = 'notes'
    this.db = null
    this.collection = null
  }



  async connect(collection) {
    try {
      await this.cliente.connect();
      this.db = this.cliente.db(this.dbName);
      if (collection) {
        this.collection = this.db.collection(String(collection));
        console.log("Conection susscessful Mongo_dao");
      } else {
        throw new Error('Unsusscessful attempt to connect to Mongo_dao');
      }
    } catch (error) {
      console.log(error);
      throw new Error('Could not connect to Database');
    }
  }

  async disconnect() {
    try {
      await this.cliente.close()
      console.log("Disconnected to BD!!!!");
    } catch (error) {
      console.log("Error disconnect");
    }
  }

  //////////////////////////////////////////////////////////////////
    
/*     
    async existeDNI(_dni = null) {
        if (_dni) {
            if (typeof _dni === "string") {
                _dni = parseInt(_dni)
            }
            let resultado = await this.collection.findOne({ dni: _dni })
    
    return resultado;
}
} */

async getAll() {
    try {
        const document = await this.collection.find().toArray();
        return document;
    } catch (error) {
        console.log(error);
        throw new Error('Could not get the collections element');
    }
    }

async search(id = null) {
    if (!id) {
        return this.collection;
    }
    try {
        const objectId = new ObjectId(id);
        const result = await this.collection.findOne({ _id: objectId });
        return result;
    } catch (error) {
        console.log(error);
        throw new Error('Could not search the item');
    }
}



    
    
    async save(element) {
        try {
            const result = await this.collection.insertOne(element);
            console.log('Save correctly');
            return result;
        } catch (error) {
            console.log(error);
            throw new Error('Error saving the element');
        }
    }
    
    async remove(id = null) {
        if (!id) {
            return this.collection;
        }
        
        try {
            const objectId = new ObjectId(id);
            const resultado = await this.collection.deleteOne({ _id: objectId });
            
            if (resultado.deletedCount === 1) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
            throw new Error('Could not remove the element');
        }
    }
    
    
    async update(id, elementModify) {
    try {
        const objectId = new ObjectId(id);
        const result = await this.collection.updateOne({ _id: objectId }, { $set: elementModify });
        return result;
    } catch (error) {
        console.log(error);
        throw new Error('Could not update the element');
    }
}

async countDocuments(property) {
    try {
        let documentos = null
        if (property) {
            documentos = await this.collection.countDocuments(property);
        } else {
            documentos = await this.collection.countDocuments();
        }
        return documentos;
    } catch (error) {
        console.log(error);
        throw new Error('Error al obtener la cantidad de los turnos');
    }
}

/*  async buscarPorTipo(_tipo = null) {
   if (_tipo) {
       
     let resultado = await this.collection.find({ tipoDeServicio: _tipo }).toArray()
     
     return resultado;
   }
 } */


/* async buscarPorDNI(_dni = null) {
    if (_dni) {
        if (typeof _dni === "string") {
            _dni = parseInt(_dni)
        }
        let resultado = await this.collection.findOne({ dni: _dni })
        
        return resultado;
    }
} */

};