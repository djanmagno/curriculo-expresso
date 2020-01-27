const CurriculoModel = require('../models/curriculo-model');

exports.getData = () => {
    return CurriculoModel;
};

exports.getName = () => {
    return CurriculoModel.name;
};

exports.getTitle = () => {
    return CurriculoModel.title;
};

exports.getProfession = () => {
    return CurriculoModel.description;
};

exports.getDescription = () => {
    return CurriculoModel.description;
};

exports.getExperience = () => {
    return CurriculoModel.experience;
};

exports.getEducation = () => {
    return CurriculoModel.eduacation;
};

exports.getSkills = () => {
    return CurriculoModel.skills;
};