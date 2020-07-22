import axios from "axios";

/**
 * Private function to get all of an entity
 * @param {String} entity API Path/Entity 
 */
function _getAll(entity){
    return axios.get(`/api/${entity}/`);
}

/**
 * Private function to get a single entity by id
 * @param {String} entity API Path/Entity 
 * @param {Integer} id Id to find by
 */
function _getOne(entity, id){
    return axios.get(`/api/${entity}/${id}`);
}

/**
 * Private function to delete a single entity by id
 * @param {String} entity API Path/Entity 
 * @param {Integer} id Id to delete
 */
function _delete(entity, id){
    return axios.delete(`/api/${entity}/${id}`);
}

/**
 * Private function to create a single entity
 * @param {String} entity entity API Path/Entity 
 * @param {Object} data data to create an entity by
 */
function _create(entity, data){
    return axios.post(`/api/${entity}/`, data);
}

/**
 * Private function to update a single entity
 * @param {String} entity entity API Path/Entity 
 * @param {Integer} id Id of the entity
 * @param {Object} data data to update an entity by
 */
function _update(id, entity, data){
    return axios.post(`/api/${entity}/${id}`, data);
}


export default {
    
    Book: {
        getAll: function () {
            return _getAll("books");
        },
        getById: function (id) {
            return _getOne("books", id);
        },
        delete: function (id) {
            return _delete("books", id);
        },
        create: function(data){
            return _create("books", data);
        },
        update: function(id, data){
            return _update("books", id, data);
        }
    },
    Author: {
        getAll: function () {
            return _getAll("authors");
        },
        getById: function (id) {
            return _getOne("authors", id);
        },
        delete: function (id) {
            return _delete("authors", id);
        },
        create: function(data){
            return _create("authors", data);
        },
        update: function(id, data){
            return _update("authors", id, data);
        }
    }
}