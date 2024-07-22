# Notas | Guia

## Configuracion del backend

Estos comandos son en Linux

<details>
<summary>Comandos para el backend</summary>
    - npm init // Este archivo contiene información sobre tu proyecto y las dependencias necesarias. 
    
    - nodemon cors express express-validator dontenv  morgan // Dependencias que utilizaremos en el repaso

    - agregar "dev": "nodemon _ruta_del_index.js" para que funcione con morgan

    - sudo fuser -k 3000/tcp // Limpia el puerto deseado

    - al usuar peticiones post en postman en los headers agregar en Key agregar Content-Type y en Value application/json para que funcione correctamente, seguido a ello realizar las peticiones en el Body

    

</details>


## Configuracion del frontend

Estos comandos son en Linux

<details>
<summary>Comandos para el frontend</summary>
    
    - ng new  //inicia el front
        Name
        estyle scss
        n
    - ng serve --host 192.168.0.8 // saca el front por le host 192.168.0.8
    - ng serve //para correrlo 
    - ng g s nombre_del_servicio
    - ng g c nombre_del_comando
    

</details>


<details>
<summary>Structurando rutas,componentes y servicios </summary>
   
    - en app crear las carpetas para servicies & components
    - en app.config.ts agregar los providers de router y http
    - en app.component.html dejar solamente <router-outlet /> 
    - index.html de src dejar el enrutador de views <app-root></app-root>
    - crear una carpeta environmets 
    - en enviroments.ts definir en donde estara la api que consumira 
            export const environment = {
                production: false,
                apiUrl: 'http://localhost:3000' //esto es provisional
            };
</details>

<details>
<summary>Configuracion de service </summary>
   
            import { Injectable, inject } from '@angular/core';
            import { HttpClient, HttpHeaders } from '@angular/common/http';
            import { Router } from '@angular/router';
            import { environment } from '../../../../environments/enviroment';


            @Injectable({
            providedIn: 'root'
            })
            export class UsuarioService {
            http=inject(HttpClient);
            router=inject(Router);

            headers = new HttpHeaders({
                'Content-Type': 'application/json'
            });

            apiUrl = environment.apiUrl;

            consult_get(url:string){
                const route = this.apiUrl + url;
                return this.http.get(route,{headers:this.headers});
            }

            consult_post(url:string,data:any){
                const route = this.apiUrl + url;
                return this.http.post(route,data,{headers:this.headers});
            }

            consult_put(url:string,data:any){
                const route = this.apiUrl + url;
                return this.http.put(route,data,{headers:this.headers});
            }

            consult_delete(url:string){
                const route = this.apiUrl + url;
                return this.http.delete(route,{headers:this.headers});
            }


            constructor() { }
            }




    
</details>



