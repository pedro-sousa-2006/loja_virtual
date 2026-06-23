import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule , FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  login = "";
  senha = "";
  response = "";
  
  validar(){
    if(this.login == null && this.senha == null){
      this.response = "O login e a senha é obrigatório!";
    }else{
      this.response = "";
    }
  }
}
