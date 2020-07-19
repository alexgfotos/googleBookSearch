module.exports = function(sequelize, DataTypes) {
    var Author = sequelize.define("Author", {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });

    Author.associate = function (models) {
      Author.hasMany(models.Book, {
          onDelete: "cascade"
      })
      
  }
  
    return Author;
  };
  