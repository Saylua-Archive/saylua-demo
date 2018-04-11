export class Area {
  constructor(args) {
    args = Object.assign({}, args);
    this.title = args.title;
    this.background = args.background;
  }
}


const Gardenia = new Area({
  title: "The Gardenia Plains",
  background: "sayleus",
});

const Korvinwood = new Area({
  title: "Korvinwood Grove",
  background: "luaria",
});

const Wanderlin = new Area({
  title: "Wanderlin Way",
  background: "dawnlands",
});

const Areas = {
  Gardenia,
  Korvinwood,
  Wanderlin,
};

export default Areas;
