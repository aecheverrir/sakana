/*
import { Meteor } from 'meteor/meteor';
import { Menus } from './menus.jsx';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase   } from "meteor/xolvio:cleaner";
import { Factory   } from "meteor/dburles:factory";

if (Meteor.isServer) {
    describe("menus", function() {

        beforeEach(function() {
            resetDatabase();
		});
        
        describe("menus.insert", function() {
            
            beforeEach(function() {
                resetDatabase();
            });

            let menuEjemplo = 
            {
                category: "prueba", 
                menuItems: 
                [	 
                    {
                        name:"nombre item menu",
                        price:18000,
                        description:"descripcion del item de menu.",
                        image:"https://i.imgur.com/LBRwvMd.jpg",
                        visibility: true
                    }
                ]   
            };

            let menuEjemploVacio = 
            {
                category: "prueba", 
                menuItems: [ ]   
            };
            

            it("Should insert new menu category with it's items", function() {
                

                //deberia fallar por no ser admin
                Meteor.call("menus.insert", menuEjemplo);

                //deberia fallar por no tener elementos
                Meteor.call("menus.insert", menuEjemploVacio);

                //deberia funcionar por ser admin y tener elementos
                // FALTA: Agregar codigo para que identifique que esta logeado un administrador
                Meteor.call("menus.insert", menuEjemplo);

                //pruebas de que se agrego bien a la coleccion 
                let newMenu = Menus.findOne({category:"prueba"});
                assert.equal("prueba", newMenu.category);
                assert.equal("nombre item menu", newMenu.menuItems[0].name);
                assert.equal(18000, newMenu.menuItems[0].price);
                assert.equal("https://i.imgur.com/LBRwvMd.jpg", newMenu.menuItems[0].image);
                assert.equal(true, newMenu.menuItems[0].visibility);

            });

        });

        
        describe("menus.remove", function() {

            //inserts a new menu category so it can be deleted
            beforeEach( function() {
                resetDatabase();
                Menus.insert(
                    {
                        category: "pruebaBorrar", 
                        menuItems: 
                        [	 
                            {
                                name:"nombre item menu",
                                price:18000,
                                description:"descripcion del item de menu.",
                                image:"https://i.imgur.com/LBRwvMd.jpg",
                                visibility: true
                            }
                        ]   
                    }
                );
            });

            it("Should delete new menu category with it's items", function() {
                
                //find
                let newMenu = Menus.findOne({category:"pruebaBorrar"});
                Meteor.call("menus.remove", newMenu._id);

                //checks it was deleted
                let menuShouldBeDeleted = Menus.findOne({category:"pruebaBorrar"});
                
                assert.equal(1,0);

                if(menuShouldBeDeleted)
                {
                    assert.equal("no debio encontrar el elemento que se debio borrar", "mal");
                }
                else
                {
                    assert.equal("no encontro el elemento que se debio borrar, prueba exitosa!", "no encontro el elemento que se debio borrar, prueba exitosa!");                                        
                }

            });

        });

    });
}

 */
