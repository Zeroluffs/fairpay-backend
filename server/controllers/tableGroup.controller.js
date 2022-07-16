const TableGroup = require("../models/TableGroup");

const tableGroupCtrl = {};
// tableGroupArray = [
//   {
//     id: 1,
//     name: "Group 1",
//   },
//   {
//     id: 2,
//     name: "Group 2",
//   },
//   {
//     id: 3,
//     name: "Group 3",
//   },
//   {
//     id: 4,
//     name: "Group 4",
//   },
//   {
//     id: 5,
//     name: "Group 5",
//   },
// ];

tableGroupCtrl.getAllGroups = async (req, res) => {
  let count = await TableGroup.find();

  if (count.length == 0) {
    for (let index = 1; index <= 5; index++) {
      const name = "Group" + " " + index;
      const newTableGroup = new TableGroup({
        id: index,
        name: name,
      });

      await newTableGroup.save();
    }
    const tableGroups = await TableGroup.find();
    res.send(tableGroups);
  } else {
    const tableGroups = await TableGroup.find();
    res.send(tableGroups);
  }
};

module.exports = tableGroupCtrl;
