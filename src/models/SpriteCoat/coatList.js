import {
  AlbinoArko, AlbinoChirling, AlbinoNibian, AlbinoGam, AlbinoSenrix,
  AlbinoFleuran, AlbinoVela, AlbinoEydrun, AlbinoGorbin, AlbinoLoxi,
} from './AlbinoCoat';
import {
  MelanisticArko, MelanisticChirling, MelanisticNibian, MelanisticGam,
  MelanisticSenrix, MelanisticFleuran, MelanisticVela, MelanisticEydrun,
  MelanisticGorbin, MelanisticLoxi,
} from './MelanisticCoat';
import {
  PiebaldArko, PiebaldChirling, PiebaldNibian, PiebaldGam, PiebaldSenrix,
  PiebaldFleuran, PiebaldVela, PiebaldEydrun, PiebaldGorbin, PiebaldLoxi,
} from './PiebaldCoat';
import {
  LuarianArko, LuarianChirling, LuarianNibian, LuarianGam, LuarianSenrix,
  LuarianFleuran, LuarianVela, LuarianEydrun, LuarianGorbin, LuarianLoxi,
} from './LuarianCoat';
import {
  SaylianArko, SaylianChirling, SaylianNibian, SaylianGam, SaylianSenrix,
  SaylianFleuran, SaylianVela, SaylianEydrun, SaylianGorbin, SaylianLoxi,
} from './SaylianCoat';
import { DawnishVela } from './DawnishCoat';
import { EarthenArko, EarthenSenrix } from './EarthenCoat';
import { CalicoFleuran } from './CalicoCoat';

const coatList = [
  new AlbinoArko(), new AlbinoChirling(), new AlbinoNibian(), new AlbinoGam(),
  new AlbinoSenrix(), new AlbinoFleuran(), new AlbinoVela(), new AlbinoEydrun(),
  new AlbinoGorbin(), new AlbinoLoxi(),
  new MelanisticArko(), new MelanisticChirling(), new MelanisticNibian(), new MelanisticGam(),
  new MelanisticSenrix(), new MelanisticFleuran(), new MelanisticVela(), new MelanisticEydrun(),
  new MelanisticGorbin(), new MelanisticLoxi(),
  new PiebaldArko(), new PiebaldChirling(), new PiebaldNibian(), new PiebaldGam(),
  new PiebaldSenrix(), new PiebaldFleuran(), new PiebaldVela(), new PiebaldEydrun(),
  new PiebaldGorbin(), new PiebaldLoxi(),
  new LuarianArko(), new LuarianChirling(), new LuarianNibian(), new LuarianGam(),
  new LuarianSenrix(), new LuarianFleuran(), new LuarianVela(), new LuarianEydrun(),
  new LuarianGorbin(), new LuarianLoxi(),
  new SaylianArko(), new SaylianChirling(), new SaylianNibian(), new SaylianGam(),
  // new SaylianSenrix(),
  new SaylianFleuran(), new SaylianVela(), new SaylianEydrun(),
  new SaylianGorbin(), new SaylianLoxi(),
  new DawnishVela(),
  new EarthenArko(), new EarthenSenrix(),
  new CalicoFleuran(),
];

export default coatList;
