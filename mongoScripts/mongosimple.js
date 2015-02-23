// mongo < scriptName.js
use sw201501;
show collections;
//var doc = {"otherAttri":"Some other value"};
//db.testSimple.insert(doc);
//db.testSimple.findOne();

//Revisando Esquema de Base de Datos
checkSchema = function()
  var collUsuariosExists = db.usuarios.count();
  var collAulasExists = db.aulas.count();
  if(!collUsuariosExists){
    var firstUser = {"username":"administrator",
                     "pswd":"whenthecatsgooutthemicepartyallnight",
                     "name":"Administrador del Sitio",
                     "fchIng": new Date(),
                     "roles":["admin","all"]
                   },
        secondUser = {"username":"guest",
                         "pswd":"bibidibabidiboo",
                         "name":"Guest User",
                         "fchIng": new Date(),
                         "roles":["all"]
                       };
        db.usuarios.insert(firstUser);
        db.usuarios.insert(secondUser);
  }
  if(!collAulasExists){
    // implementar con 10 aulas.
    // del Edificio F

  var aula1={"Edificio":"F","seccion":"101","limite":"30"};
  var aula2={"Edificio":"F","seccion":"102","limite":"35"};
  var aula3={"Edificio":"F","seccion":"103","limite":"40"};
  var aula4={"Edificio":"F","seccion":"104","limite":"25"};
  var aula5={"Edificio":"F","seccion":"105","limite":"25"};
  var aula6={"Edificio":"F","seccion":"106","limite":"35"};
  var aula7={"Edificio":"F","seccion":"107","limite":"30"};
  var aula8={"Edificio":"F","seccion":"108","limite":"30"};
  var aula9={"Edificio":"F","seccion":"109","limite":"35"};
  var aula10={"Edificio":"F","seccion":"1010","limite":"35"};

        db.usuarios.insert(aula1);
        db.usuarios.insert(aula2);
        db.usuarios.insert(aula3);
        db.usuarios.insert(aula4);
        db.usuarios.insert(aula5);
        db.usuarios.insert(aula6);
        db.usuarios.insert(aula7);
        db.usuarios.insert(aula8);
        db.usuarios.insert(aula9);
        db.usuarios.insert(aula10);
 
}


}



checkSchema();
db.usuarios.find().pretty();
db.aulas.find().pretty();
