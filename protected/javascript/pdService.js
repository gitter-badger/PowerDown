var pdApp = angular.module('pdApp');

pdApp.service('productList', [function(){
    this.getmotors = function(){
        return [
            {name: 'Motor1', partNumber: '1234'},
            {name: 'Motor2', partNumber: '2345'},
            {name: 'Motor3', partNumber: '3456'},
            {name: 'Motor4', partNumber: '4567'},
            {name: 'Motor5', partNumber: '5678'},
            {name: 'Motor6', partNumber: '6789'}
        ];
    };
    this.getantisweat = function(){
        return [
            {name: 'antisweat1', partNumber: 'abcd'},
            {name: 'antisweat2', partNumber: 'bcde'}
        ];
    };
    this.getcoolerled = function(){
        return [
            {
                productname: "American Bright 4 Foot Tubes",
                products: [
                    {name: 'STS SERIES: 4ft CENTER Tube', partNumber: 'AB-STS-48C50100A-S'},
                    {name: 'STS Series: 4ft END Tube', partNumber: 'AB-STS-48C50100A-S'},
                    {name: 'STT Series: 4ft CENTER Tube', partNumber: 'AB-STT-48C50100A-S'},
                    {name: 'STT Series: 4ft END Tube', partNumber: 'AB-STT-48C50100AE-S'}
                ]
            },
            {
                productname: "American Bright 5 Foot Tubes",
                products: [
                    {name: 'STS SERIES: 4ft CENTER Tube', partNumber: 'AB-STS-48C50100A-S'},
                    {name: 'STS Series: 4ft END Tube', partNumber: 'AB-STS-48C50100A-S'},
                    {name: 'STT Series: 4ft CENTER Tube', partNumber: 'AB-STT-48C50100A-S'},
                    {name: 'STT Series: 4ft END Tube', partNumber: 'AB-STT-48C50100AE-S'}
                ]
            },
            {
                productname: "American Bright 6 Foot Tubes",
                products: [
                    {name: 'STS SERIES: 4ft CENTER Tube', partNumber: 'AB-STS-48C50100A-S'},
                    {name: 'STS Series: 4ft END Tube', partNumber: 'AB-STS-48C50100A-S'},
                    {name: 'STT Series: 4ft CENTER Tube', partNumber: 'AB-STT-48C50100A-S'},
                    {name: 'STT Series: 4ft END Tube', partNumber: 'AB-STT-48C50100AE-S'}
                ]
            }
        ]
    };
    this.getledlights = function(){
        return [
            {
                companyname: 'MaxLite Products',
                products: [
                    {name: 'A-Lamps', partNumber: '10A19DLED27', estardlc: true, description: '73581 10W DIMMABLE OMNIDIRECTIONAL A19 2700K'},
                    {name: 'BR Lamps', partNumber: '', estardlc: true},
                    {name: 'PAR Lamps', partNumber: '', estardlc: true},
                    {name: 'Area Lights', partNumber: '', estardlc: true}
                ]
            },
            {
                companyname: 'HiLumz Products',
                products: [
                    {name: 'Lampset 1', partNumber: '123lkj123', estardlc: false, description: 'Lampset 1 description'}
                ]
            }
        ]
    }
}]);
pdApp.service('userFunctions', ['$http', function($http){
    this.getUsers = function(){
        console.log('Getting users from service');
        var promise = $http.get('/api/user').then(function(response){
            console.log(response);
            return response.data;
        });
        return promise;
    };
    this.resetUserPass = function(){
        console.log('Reset Password')
    }
}]);