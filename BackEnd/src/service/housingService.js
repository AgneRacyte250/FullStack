var housingModel = require('../Models/housingModel');

module.exports.getDataFromDBService = () => {
    return new Promise(function checkURL(resolve, reject) {
        housingModel.find({}, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports.createHousingDBService = (housingDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var housingModelData = new housingModel();

        housingModelData.price = housingDetails.price;
        housingModelData.area = housingDetails.area;
        housingModelData.bedrooms = housingDetails.bedrooms;
        housingModelData.bathrooms = housingDetails.bathrooms;
        housingModelData.stories = housingDetails.stories;
        housingModelData.mainroad = housingDetails.mainroad;
        housingModelData.guestroom = housingDetails.guestroom;
        housingModelData.basement = housingDetails.basement;
        housingModelData.hotwaterheating = housingDetails.hotwaterheating;
        housingModelData.airconditioning = housingDetails.airconditioning;
        housingModelData.parking = housingDetails.parking;
        housingModelData.prefarea = housingDetails.prefarea;
        housingModelData.furnishingstatus = housingDetails.furnishingstatus;

        housingModelData.save(function resultHandle(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
    });
}

module.exports.updateHousingDBService = (id, housingDetails) => {
    return new Promise(function myFn(resolve, reject) {
        housingModel.findByIdAndUpdate(id, housingDetails, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports.removeHousingDBService = (id) => {
    return new Promise(function myFn(resolve, reject) {
        housingModel.findByIdAndDelete(id, function returnData(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(result);
            }
        });
    });
}
