import { checkInfo } from "../components/utils/Util";

describe("Adding new Reminder", () => {
  describe("Failed attempt", () => {
    // Testing reminder length
    it("Reminder is > 30 chars", () => {
      const reminder = {
        id: 1729,
        reminder: "This reminder is certainly more than thirty chars",
        user: "Camilo Villegas",
        city: "Medellin",
        date: 4,
        month: 2,
        time: "12:45",
        color: "#CA1551",
      };
      expect(checkInfo(reminder)).toEqual(
        "Reminder can't be more than 30 chars. Please correct reminder."
      );
    });

    // Testing field values
    describe("Empty fields", () => {
      it("reminder is empty", () => {
        const reminder = {
          id: 1729,
          reminder: "",
          user: "Camilo Villegas",
          city: "Medellin",
          date: 4,
          month: 2,
          time: "12:45",
          color: "#CA1551",
        };
        expect(checkInfo(reminder)).toEqual(
          "Fields can't be empty. Please fill them."
        );
      });

      it("reminder and user are empty", () => {
        const reminder = {
          id: 1729,
          reminder: "",
          user: "",
          city: "Medellin",
          date: 4,
          month: 2,
          time: "12:45",
          color: "#CA1551",
        };
        expect(checkInfo(reminder)).toEqual(
          "Fields can't be empty. Please fill them."
        );
      });

      it("All fields are empty", () => {
        const reminder = {
          id: Number,
          reminder: "",
          user: "",
          city: "",
          date: Number,
          month: Number,
          time: "",
          color: "",
        };
        expect(checkInfo(reminder)).toEqual(
          "Fields can't be empty. Please fill them."
        );
      });
    });
  });

  // Testing correct output
  it("Correct Reminder", () => {
    const reminder = {
      id: 1729,
      reminder: "A new Hope",
      user: "Camilo Villegas",
      city: "Medellin",
      date: 4,
      month: 2,
      time: "12:45",
      color: "#CA1551",
    };
    expect(checkInfo(reminder)).toEqual("TRUE");
  });
});
