exports.seed = function (knex) {
  return knex("updateHours")
    .del()
    .then(function () {
      return knex("updateHours").insert([
        {
          monday: "8:00am - 4:00pm",
          tuesday: "8:00am - 4:00pm",
          wednesday: "8:00am - 4:00pm",
          thursday: "8:00am - 4:00pm",
          friday: "8:00am - 4:00pm",
          saturday: "Closed",
          sunday: "Closed",
        },
      ]);
    });
};
