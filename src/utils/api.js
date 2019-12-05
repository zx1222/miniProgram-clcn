import rxwx from 'rxjs-wx'

export default class ApiService {

    request(method, url, data = {}) {
        const header = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${wx.getStorageSync('token')}`,
        }
        url = [
            process.env.baseUrl,
            url.replace(/:([^&;/?]+)/g, (...s) => trim(data[s[1]])),
        ].join('/')

        const trim = s => s === undefined || s === null ? '' : s;
        const args = [];

        data = Object.keys(data).reduce((obj, key) => {
            obj[key] = trim(data[key]);
            return obj;
        }, {});

        args.push({ url, data, header, method });


        return rxwx.request(...args)
            // .pipe(
            .map(response => {
                if (response.statusCode == 200) {
                    return response['data'];
                } else {
                    this.handleError(response)
                }
            })
        // .catch(error =>{
        //     console.log(error)
        //     handleError(error)
        // } )
        // )
    };

    handleError(response) {
        let errorMessage = {};
        if (response.statusCode == 0) {
            errorMessage = {
                success: false,
                status: 0,
                data: 'Sorry, there was a connection error occurred. Please try again.'
            };
            return throwError(errorMessage);
        }
        if (response.statusCode == 401) {
            wx.clearStorageSync();
            wx.redirectTo({
                url: '/pages/login/index'
            })
        }
        if (response.statusCode != 0 && response.statusCode != 401) {
            errorMessage = response.error;
            const { statusCode, message } = errorMessage;
            return throwError(errorMessage);
        }
    }


    get = (url) => (data) => this.request('get', url, data)
    patch = (url) => (data) => this.request('patch', url, data);
    post = (url) => (data) => this.request('post', url, data);
    put = (url) => (data) => this.request('put', url, data);
    deletef = (url) => (data) => this.request('delete', url, data);

}
