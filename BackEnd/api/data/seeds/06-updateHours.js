exports.seed = function (knex) {
  return knex("updateHours")
    .del()
    .then(function () {
      return knex("updateHours").insert([
        {
          mon: "8:00am - 4:00pm",
          tue: "8:00am - 4:00pm",
          wed: "8:00am - 4:00pm",
          thu: "8:00am - 4:00pm",
          fri: "8:00am - 4:00pm",
          sat: "Closed",
          sun: "Closed",
        },
      ]);
    });
};
