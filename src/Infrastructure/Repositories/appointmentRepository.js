"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentRepository = void 0;
const appointmentSchema_1 = __importDefault(require("../Models/appointmentSchema"));
class appointmentRepository {
    registerAppointment(newAppointment) {
        return __awaiter(this, void 0, void 0, function* () {
            newAppointment.date.setMinutes(0);
            newAppointment.date.setSeconds(0);
            const appointment = yield appointmentSchema_1.default.findOne({
                date: newAppointment.date,
                dentistId: newAppointment.dentistId,
            });
            console.log(appointment);
            if (appointment === null) {
                yield appointmentSchema_1.default.create(newAppointment);
                console.log(newAppointment.date);
                return newAppointment.date.toDateString();
            }
            return 'none';
        });
    }
    getAppointment(dentistId, date) {
        return __awaiter(this, void 0, void 0, function* () {
            if (date.getMinutes() >= 0 && date.getMinutes() <= 29) {
                date.setMinutes(0);
                date.setSeconds(0);
            }
            else if (date.getMinutes() >= 30 && date.getMinutes() <= 59) {
                date.setMinutes(30);
                date.setSeconds(0);
            }
            const appointment = yield appointmentSchema_1.default.findOne({
                date: date,
                dentistId: dentistId,
            });
            if (appointment === null) {
                return null;
            }
            return appointment;
        });
    }
}
exports.appointmentRepository = appointmentRepository;
