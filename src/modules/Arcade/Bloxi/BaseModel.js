// Gives some component binding magic to models by default.
// Necessary so that components will update when models do.

export default class BaseModel {
  bindComponent(component) {
    // Slight amount of magic necessary in order to make sure
    // that when this model updates, our Component will also update.
    //
    // Our model will not appear to have updated if we only change it's attributes.
    // Therefore, we will component.setState() when a change is made.

    if (this.__components !== undefined) {
      this.__components.push(component);
    } else {
      this.__components = [component];
    }
  }

  triggerUpdate() {
    if (this.__components !== undefined) {
      for (let i = 0; i < this.__components.length; i++) {
        const component = this.__components[i];
        const triggerUpdate = (component.state.triggerUpdate === undefined) ? true : !component.state.triggerUpdate;

        component.setState({
          triggerUpdate,
        });
      }
    }
  }
}
