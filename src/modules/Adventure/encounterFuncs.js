import { sRandomInt, seedChoice } from 'utils';
import { adopt, accompany, addCoins } from '../../store';
import { store } from '../../index';
import Companion, { species } from './Companion';

export function addCoinsFunc(n) {
  return () => store.dispatch(addCoins(n));
}

export function accompanyFunc(companion) {
  return () => store.dispatch(accompany(companion));
}

export function adoptFunc(companion) {
  return () => store.dispatch(adopt(companion));
}

export function petImage(pet) {
  return '/img/pets/' + pet.species + '/' + pet.coloration + '.png';
}


/* eslint-disable */
export function randomName(seed) {
  const names = ["Jacob","Michael","Matthew","Joshua","Christopher","Nicholas","Andrew","Joseph","Daniel","Tyler","William","Brandon","Ryan","John","Zachary","David","Anthony","James","Justin","Alexander","Jonathan","Christian","Austin","Dylan","Ethan","Benjamin","Noah","Samuel","Robert","Nathan","Cameron","Kevin","Thomas","Jose","Hunter","Jordan","Kyle","Caleb","Jason","Logan","Aaron","Eric","Brian","Gabriel","Adam","Jack","Isaiah","Juan","Luis","Connor","Charles","Elijah","Isaac","Steven","Evan","Jared","Sean","Timothy","Luke","Cody","Nathaniel","Alex","Seth","Mason","Richard","Carlos","Angel","Patrick","Devin","Bryan","Cole","Jackson","Ian","Garrett","Trevor","Jesus","Chase","Adrian","Mark","Blake","Sebastian","Antonio","Lucas","Jeremy","Gavin","Miguel","Julian","Dakota","Alejandro","Jesse","Dalton","Bryce","Tanner","Kenneth","Stephen","Jake","Victor","Spencer","Marcus","Paul","Brendan","Jeremiah","Xavier","Jeffrey","Tristan","Jalen","Jorge","Edward","Riley","Wyatt","Colton","Joel","Maxwell","Aidan","Travis","Shane","Colin","Dominic","Carson","Vincent","Derek","Oscar","Grant","Eduardo","Peter","Henry","Parker","Hayden","Collin","George","Bradley","Mitchell","Devon","Ricardo","Shawn","Taylor","Nicolas","Francisco","Gregory","Liam","Kaleb","Preston","Erik","Alexis","Owen","Omar","Diego","Dustin","Corey","Fernando","Clayton","Carter","Ivan","Jaden","Javier","Alec","Johnathan","Scott","Manuel","Cristian","Alan","Raymond","Brett","Max","Andres","Gage","Mario","Dawson","Dillon","Cesar","Wesley","Levi","Jakob","Chandler","Martin","Malik","Edgar","Trenton","Sergio","Josiah","Nolan","Marco","Peyton","Harrison","Hector","Micah","Roberto","Drew","Brady","Erick","Conner","Jonah","Casey","Jayden","Emmanuel","Edwin","Andre","Phillip","Brayden","Landon","Giovanni","Bailey","Ronald","Braden","Damian","Donovan","Ruben","Frank","Pedro","Gerardo","Andy","Chance","Abraham","Calvin","Trey","Cade","Donald","Derrick","Payton","Darius","Enrique","Keith","Raul","Jaylen","Troy","Jonathon","Cory","Marc","Skyler","Rafael","Trent","Griffin","Colby","Johnny","Eli","Chad","Armando","Kobe","Caden","Cooper","Marcos","Elias","Brenden","Israel","Avery","Zane","Dante","Josue","Zackary","Allen","Mathew","Dennis","Leonardo","Ashton","Philip","Julio","Miles","Damien","Ty","Gustavo","Drake","Jaime","Simon","Jerry","Curtis","Kameron","Lance","Brock","Bryson","Alberto","Dominick","Jimmy","Kaden","Douglas","Gary","Brennan","Zachery","Randy","Louis","Larry","Nickolas","Tony","Albert","Fabian","Keegan","Saul","Danny","Tucker","Damon","Myles","Arturo","Corbin","Deandre","Ricky","Kristopher","Lane","Pablo","Darren","Zion","Jarrett","Alfredo","Micheal","Angelo","Carl","Oliver","Kyler","Tommy","Walter","Dallas","Jace","Quinn","Theodore","Grayson","Lorenzo","Joe","Arthur","Bryant","Brent","Roman","Russell","Ramon","Lawrence","Moises","Aiden","Quentin","Tyrese","Jay","Tristen","Emanuel","Salvador","Terry","Morgan","Jeffery","Esteban","Tyson","Braxton","Branden","Brody","Craig","Marvin","Ismael","Rodney","Isiah","Maurice","Marshall","Ernesto","Emilio","Brendon","Kody","Eddie","Malachi","Abel","Keaton","Jon","Shaun","Skylar","Nikolas","Ezekiel","Santiago","Kendall","Axel","Camden","Trevon","Bobby","Conor","Jamal","Lukas","Malcolm","Zackery","Jayson","Javon","Reginald","Zachariah","Desmond","Roger","Felix","Dean","Johnathon","Quinton","Ali","Davis","Gerald","Demetrius","Rodrigo","Billy","Rene","Reece","Justice","Kelvin","Leo","Guillermo","Chris","Kevon","Steve","Frederick","Clay","Weston","Dorian","Hugo","Orlando","Roy","Terrance","Kai","Khalil","Graham","Noel","Nathanael","Willie","Terrell","Tyrone","Camron","Mauricio","Amir","Darian","Jarod","Nelson","Kade","Reese","Kristian","Garret","Marquis","Rodolfo","Dane","Felipe","Todd","Elian","Walker","Mateo","Jaylon","Kenny","Bruce","Ezra","Ross","Damion","Francis","Tate","Byron","Reid","Warren","Randall","Bennett","Jermaine","Triston","Jaquan","Harley","Jessie","Franklin","Duncan","Charlie","Reed","Blaine","Braeden","Holden","Ahmad","Issac","Kendrick","Melvin","Sawyer","Solomon","Moses","Jaylin","Sam","Cedric","Mohammad","Alvin","Beau","Jordon","Elliot","Lee","Darrell","Jarred","Mohamed","Davion","Wade","Tomas","Jaxon","Uriel","Deven","Maximilian","Rogelio","Gilberto","Ronnie","Julius","Allan","Brayan","Deshawn","Joey","Terrence","Noe","Alfonso","Ahmed","Tyree","Tyrell","Jerome","Devan","Neil","Ramiro","Pierce","Davon","Devonte","Jamie","Leon","Adan","Eugene","Stanley","Marlon","Quincy","Leonard","Wayne","Will","Alvaro","Ernest","Harry","Emily","Hannah","Madison","Ashley","Sarah","Alexis","Samantha","Jessica","Elizabeth","Taylor","Lauren","Alyssa","Kayla","Abigail","Brianna","Olivia","Emma","Megan","Grace","Victoria","Rachel","Anna","Sydney","Destiny","Morgan","Jennifer","Jasmine","Haley","Julia","Kaitlyn","Nicole","Amanda","Katherine","Natalie","Hailey","Alexandra","Savannah","Chloe","Rebecca","Stephanie","Maria","Sophia","Mackenzie","Allison","Isabella","Amber","Mary","Danielle","Gabrielle","Jordan","Brooke","Michelle","Sierra","Katelyn","Andrea","Madeline","Sara","Kimberly","Courtney","Erin","Brittany","Vanessa","Jenna","Jacqueline","Caroline","Faith","Makayla","Bailey","Paige","Shelby","Melissa","Kaylee","Christina","Trinity","Mariah","Caitlin","Autumn","Marissa","Breanna","Angela","Catherine","Zoe","Briana","Jada","Laura","Claire","Alexa","Kelsey","Kathryn","Leslie","Alexandria","Sabrina","Mia","Isabel","Molly","Leah","Katie","Gabriella","Cheyenne","Cassandra","Tiffany","Erica","Lindsey","Kylie","Amy","Diana","Cassidy","Mikayla","Ariana","Margaret","Kelly","Miranda","Maya","Melanie","Audrey","Jade","Gabriela","Caitlyn","Angel","Jillian","Alicia","Jocelyn","Erika","Lily","Heather","Madelyn","Adriana","Arianna","Lillian","Kiara","Riley","Crystal","Mckenzie","Meghan","Skylar","Ana","Britney","Angelica","Kennedy","Chelsea","Daisy","Kristen","Veronica","Isabelle","Summer","Hope","Brittney","Lydia","Hayley","Evelyn","Bethany","Shannon","Michaela","Karen","Jamie","Daniela","Angelina","Kaitlin","Karina","Sophie","Sofia","Diamond","Payton","Cynthia","Alexia","Valerie","Monica","Peyton","Carly","Bianca","Hanna","Brenda","Rebekah","Alejandra","Mya","Avery","Brooklyn","Ashlyn","Lindsay","Ava","Desiree","Alondra","Camryn","Ariel","Naomi","Jordyn","Kendra","Mckenna","Holly","Julie","Kendall","Kara","Jasmin","Selena","Esmeralda","Amaya","Kylee","Maggie","Makenzie","Claudia","Kyra","Cameron","Karla","Kathleen","Abby","Delaney","Amelia","Casey","Serena","Savanna","Aaliyah","Giselle","Mallory","April","Raven","Adrianna","Christine","Kristina","Nina","Asia","Natalia","Valeria","Aubrey","Lauryn","Kate","Patricia","Jazmin","Rachael","Katelynn","Cierra","Alison","Macy","Nancy","Elena","Kyla","Katrina","Jazmine","Joanna","Tara","Gianna","Juliana","Fatima","Allyson","Gracie","Sadie","Guadalupe","Genesis","Yesenia","Julianna","Skyler","Tatiana","Alexus","Alana","Elise","Kirsten","Nadia","Sandra","Dominique","Ruby","Haylee","Jayla","Tori","Cindy","Sidney","Ella","Tessa","Carolina","Camille","Jaqueline","Whitney","Carmen","Vivian","Priscilla","Bridget","Celeste","Kiana","Makenna","Alissa","Madeleine","Miriam","Natasha","Ciara","Cecilia","Mercedes","Kassandra","Reagan","Aliyah","Josephine","Charlotte","Rylee","Shania","Kira","Meredith","Eva","Lisa","Dakota","Hallie","Anne","Rose","Liliana","Kristin","Deanna","Imani","Marisa","Kailey","Annie","Nia","Carolyn","Anastasia","Brenna","Dana","Shayla","Ashlee","Kassidy","Alaina","Rosa","Wendy","Logan","Tabitha","Paola","Callie","Addison","Lucy","Gillian","Clarissa","Destinee","Josie","Esther","Denise","Katlyn","Mariana","Bryanna","Emilee","Georgia","Deja","Kamryn","Ashleigh","Cristina","Baylee","Heaven","Ruth","Raquel","Monique","Teresa","Helen","Krystal","Tiana","Cassie","Kayleigh","Marina","Heidi","Ivy","Ashton","Clara","Meagan","Gina","Linda","Gloria","Jacquelyn","Ellie","Jenny","Renee","Daniella","Lizbeth","Anahi","Virginia","Gisselle","Kaitlynn","Julissa","Cheyanne","Lacey","Haleigh","Marie","Martha","Eleanor","Kierra","Tiara","Talia","Eliza","Kaylie","Mikaela","Harley","Jaden","Hailee","Madalyn","Kasey","Ashlynn","Brandi","Lesly","Elisabeth","Allie","Viviana","Cara","Marisol","India","Tatyana","Litzy","Melody","Jessie","Brandy","Alisha","Hunter","Noelle","Carla","Francesca","Tia","Layla","Krista","Zoey","Carley","Janet","Carissa","Iris","Kaleigh","Tyler","Susan","Tamara","Theresa","Yasmine","Tatum","Sharon","Alice","Yasmin","Tamia","Abbey","Alayna","Kali","Lilly","Bailee","Lesley","Mckayla","Ayanna","Serenity","Karissa","Precious","Jane","Maddison","Jayda","Kelsie","Lexi","Phoebe","Halle","Kiersten","Kiera","Tyra","Annika","Felicity","Taryn","Kaylin","Ellen","Kiley","Jaclyn","Rhiannon","Madisyn","Colleen","Joy","Pamela","Charity","Tania","Fiona","Alyson","Kaila","Annabelle","Emely","Angelique","Alina","Irene","Johanna","Regan","Janelle","Janae","Madyson","Paris","Justine","Chelsey","Sasha","Paulina","Mayra","Zaria","Skye","Cora","Brisa","Emilie","Felicia","Larissa","Macie","Tianna","Aurora","Sage","Lucia","Alma","Chasity","Ann","Deborah","Nichole","Jayden","Alanna","Malia","Carlie","Angie","Nora","Kailee","Sylvia","Carrie","Elaina","Sonia","Genevieve","Kenya","Piper","Marilyn","Amari","Macey","Marlene","Barbara","Tayler","Julianne","Brooklynn","Lorena","Perla","Elisa","Kaley","Leilani","Eden","Miracle","Devin","Aileen","Chyna","Athena","Esperanza","Regina","Adrienne","Shyanne","Luz","Tierra","Cristal","Clare","Eliana","Kelli","Eve","Sydnee","Madelynn","Breana","Melina","Arielle","Justice","Toni","Corinne","Maia"];
  return seedChoice(seed, names);
}
/* eslint-enable */

export function randomCompanion(seed) {
  const compSpecies = seedChoice(seed, species);
  const compColoration = seedChoice(seed + 1, compSpecies[1]);
  return new Companion(
    randomName(seed + 2),
    compSpecies[0],
    compColoration,
    sRandomInt(seed + 3, 11),
    sRandomInt(seed + 4, 11),
    sRandomInt(seed + 5, 11),
  );
}

export function randomContinue(seed) {
  const continues = ["Keep going",
    "Continue",
    "Continue traveling",
    "Keep exploring",
    "Ok",
    "Okay",
    "Got it",
    "Cool",
    "Cool beans",
    "Nice"];
  return seedChoice(seed, continues);
}
