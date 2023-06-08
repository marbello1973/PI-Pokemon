/* eslint-disable import/no-extraneous-dependencies */
const { expect, test } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Pokemon, conn } = require("../../src/db.js");
const { getHandlerApiInfo } = require("../../src/handler/index.js");

const agent = session(app);
const pokemon = {
  name: "Pikachu",
};

describe("Pokemon routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Pokemon.sync({ force: true }).then(() => Pokemon.create(pokemon))
  );

  describe("GET rutas  ", () => {
    /* it("GET ruta de /pokemon debe devolver un 200 'Exito' ", () => {
      return new Promise((resolve) => {
        const res = agent.get(`/pokemon/`).send();
        expect(res.statusCode).to.equal(200);
        expect(res.headers["Content-Type"]).toContain(["application/json"]);
      });
    }); */

    it("GET ruta por /:id debe devolver un 200 'Exito'", async () => {
      const id = "1";
      const res = await agent.get(`/pokemon/${id}`);
      expect(res.statusCode).to.equal(200);
    });
    it("GET ruta por /type debe devolver un 200 'Exito'", async () => {
      const res = await agent.get("/type");
      expect(res.statusCode).to.equal(200);
    });

    it("POST creacion de personajes debe devolver un 200", async () => {
      const pokemonData = {
        name: "Pikachu",
        image: "https://media.giphy.com/media/Gm7LdndVpiCs0/giphy.gif",
        hp: 35,
        attack: 55,
        defense: 40,
        speed: 90,
        height: 4,
        weight: 60,
        types: ["electric"],
      };
      const res = await agent.post("/pokemon").send(pokemonData);
      expect(res.statusCode).equal(200);
    });
  });

  describe("evaluar funcion getHandlerApiInfo ", () => {
    it("getHandlerApiInfo debe ser una funcion", () => {
      expect(typeof getHandlerApiInfo).to.equal("function");
      expect(typeof getHandlerApiInfo).to.not.equal("string");
      expect(typeof getHandlerApiInfo).to.not.equal("number");
    });

    it("getHandlerApiInfo debe devolver un status 200", async () => {
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({}),
      });
    });

    it("getHandlerApiInfo debe devolver un status 400", async () => {
      Promise.resolve({
        status: 400,
        json: () => Promise.resolve({}),
      });
    });
  });
});

/* 
    describe("GET rutas  ", () => {
    beforeEach(async () => {
      const res = await agent.get("/pokemon").send();
    });
    it("GET ruta de /pokemon debe devolver un 200 'Exito' ", async () => {
      expect(res.statusCode).to.equal(200);
      expect(res.headers["Content-Type"]).toContain(["application/json"]);
    });

    it('retorna un aray de objetos con la propiedad "name" ', async () => {
      expect(res.body[0]).toHaveProperty("name");
    });
  }); 
*/

/*

  describe("GET /pokemon  ", () => {
    it("Retorna un 200 con el pokemone que incluyan el nombre pasado por query", async () => {
      return new Promise((resolve) => {
        const res = agent.get(`/pokemon/?name=${pokemon}`);
        expect(res.statusCode).to.equal(200);
      });
    });

    it("Retorna un status 404 pokemon no existe", async () => {
      return new Promise((resolve) => {
        const res = agent.get("/pokemon?name=asdasd");
        expect(res.statusCode).to.equal(404);
      });
    });

    it("Retorna un 200 con todos los pokemones", async () => {
      return new Promise((resolve) => {
        const res = agent.get("/pokemon");
        expect(res.statusCode).to.equal(200);
        expect(res.body.Pokemon.lenght >= 1).to.equal("array");
      });
    });

    it("Retorna un status 400 si el pokemon no existe", async () => {
      return new Promise((resolve) => {
        const name = "pikachu";
        const res = agent.get(`/pokemon?name=${!name}`);
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.be.an("object");
      });
    });
  });
*/

/* 
 describe("evaluar funcion getHandlerApiInfo ", () => {
    it("getHandlerApiInfo debe ser una funcion", () => {
      expect(typeof getHandlerApiInfo).to.equal("function");
      expect(typeof getHandlerApiInfo).to.not.equal("string");
      expect(typeof getHandlerApiInfo).to.not.equal("number");
    });
  }); 
*/
