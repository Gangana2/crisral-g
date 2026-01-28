import Item from "../models/item.js";

export function getItem(req, res) {

    Item.find()
      .then((items) => {
        res.status(200).json(items);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to fetch items' });
      });
}

export function saveItem(req, res) {
    //Authorization check for admin role
        if(req.user.role != 'admin'){
        res.status(403).json({ error: 'unauthorized you cant add item' });
        return;
    }

    const newItem = new Item(req.body);
    newItem.save()
      .then(() => {
        res.status(201).json({ message: 'Item created successfully' });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to create item' });
      });
}

export function goodItem(req, res) {
    res.status(200).json({ message: 'Item marked as good successfully' });
}

export function searchItem(req, res) {
  // const name = req.body.name;
  //URL parameter name

  const name = req.params.name;
  Item.find({ name : name })
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to search items' });
    });
}



