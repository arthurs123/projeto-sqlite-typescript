"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const better_sqlite3_1 = __importDefault(require("better-sqlite3"));
// O arquivo escola.db será criado na raiz do projeto,
// caso ainda não exista.
const db = new better_sqlite3_1.default('escola.db');
db.exec(`
  CREATE TABLE IF NOT EXISTS alunos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE
    
  );
`);
console.log('Banco de dados conectado e tabela verificada!');
exports.default = db;
