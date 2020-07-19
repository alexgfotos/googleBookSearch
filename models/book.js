module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    synopsis: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.TEXT,
    },
    link: {
      type: DataTypes.TEXT,
    },
  });

  Book.associate = function (models) {
    
    Book.belongsTo(models.Author, {
        foreignKey: {
            allowNull: true
        }
    });

}

  return Book;
};
