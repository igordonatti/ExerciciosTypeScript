var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GaragemMecanica = /** @class */ (function () {
    function GaragemMecanica(valorReparo, reparo) {
        this._valorReparo = valorReparo;
        this._reparo = reparo;
        this._concluido = false;
    }
    Object.defineProperty(GaragemMecanica.prototype, "valorCarro", {
        get: function () {
            return this._valorReparo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GaragemMecanica.prototype, "valorReparo", {
        set: function (valorReparo) {
            if (!valorReparo) {
                throw new Error('Modelo Invalido.');
            }
            this._valorReparo = valorReparo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GaragemMecanica.prototype, "reparo", {
        get: function () {
            return this._reparo;
        },
        set: function (reparo) {
            if (!reparo) {
                throw new Error('Invalid last name.');
            }
            this._reparo = reparo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GaragemMecanica.prototype, "concluido", {
        get: function () {
            return this._concluido;
        },
        set: function (concluido) {
            this._concluido = concluido;
        },
        enumerable: false,
        configurable: true
    });
    GaragemMecanica.prototype.servicoConcluido = function () {
        return this._concluido ? "Sim" : "Não";
    };
    return GaragemMecanica;
}());
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(modeloMoto, valorReparo, reparo) {
        var _this = _super.call(this, valorReparo, reparo) || this;
        _this._modeloMoto = modeloMoto;
        return _this;
    }
    Object.defineProperty(Moto.prototype, "modeloMoto", {
        get: function () {
            return this._modeloMoto;
        },
        set: function (modeloMoto) {
            if (!modeloMoto) {
                throw new Error('Modelo Invalido.');
            }
            this._modeloMoto = modeloMoto;
        },
        enumerable: false,
        configurable: true
    });
    return Moto;
}(GaragemMecanica));
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(modeloCarro, valorReparo, reparo) {
        var _this = _super.call(this, valorReparo, reparo) || this;
        _this._modeloCarro = modeloCarro;
        return _this;
    }
    Object.defineProperty(Carro.prototype, "modeloCarro", {
        get: function () {
            return this._modeloCarro;
        },
        set: function (modeloCarro) {
            if (!modeloCarro) {
                throw new Error('Modelo Invalido.');
            }
            this._modeloCarro = modeloCarro;
        },
        enumerable: false,
        configurable: true
    });
    return Carro;
}(GaragemMecanica));
var yamaha = new Moto("Yamaha 250E", 450.00, "Troca de pneu");
var corsa = new Carro("Chevrolet Corsa", 1250.00, "Revisão");
corsa.concluido = true;
console.log(corsa.servicoConcluido());
console.log(yamaha.servicoConcluido());
