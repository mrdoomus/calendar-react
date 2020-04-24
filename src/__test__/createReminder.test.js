import { checkInfo } from "../components/utils/Util";

describe("Adding new Reminder", () => {
  describe("Failed attempt", () => {
    // Testing title length
    it("Title is > 30 chars", () => {
      const reminder = {
        id: 1729,
        title: "This title is certainly more than thirty chars",
        user: "Camilo Villegas",
        city: "Medellin",
        date: 4,
        month: 2,
        time: "12:45",
        color: "#CA1551",
      };
      expect(checkInfo(reminder)).toEqual(
        "Title can't be more than 30 chars. Please correct title."
      );
    });

    // Testing field values
    describe("Empty fields", () => {
      it("title is empty", () => {
        const reminder = {
          id: 1729,
          title: "",
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

      it("title and user are empty", () => {
        const reminder = {
          id: 1729,
          title: "",
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
          title: "",
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
      title: "A new Hope",
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
