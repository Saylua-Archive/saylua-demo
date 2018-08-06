export class Area {
  constructor(args) {
    args = Object.assign({}, args);
    this.title = args.title;
    this.background = args.background;
    this.region = args.region;
  }
}

const Gardenia = new Area({
  title: "The Gardenia Plains",
  background: "gardenia",
  region: "Saylian",
});

const Korvinwood = new Area({
  title: "Korvinwood Grove",
  background: "luaria",
  region: "Luarian",
});

const Wanderlin = new Area({
  title: "Wanderlin Way",
  background: "dawnlands",
  region: "Dawnish",
});

const Areas = {
  Gardenia,
  Korvinwood,
  Wanderlin,
};

export default Areas;
