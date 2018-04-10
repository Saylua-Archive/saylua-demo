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

const Corvinwood = new Area({
  title: "Corvinwood Grove",
  background: "luaria",
});

const Wanderlin = new Area({
  title: "Wanderlin Way",
  background: "dawnlands",
});

const Areas = {
  Gardenia,
  Corvinwood,
  Wanderlin,
};

export default Areas;
