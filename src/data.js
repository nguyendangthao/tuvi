
import axios from 'axios';
class API {
    //config
    constructor() {
        this.axios = axios.create({
            baseURL: `https://api.kma-chatbot.com/`,
            timeout: 100000,
        });
    }
    static setHeader(token) {
        return {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
    }

    //api
    async getConGiap(conGiap) {
        // return await this.axios.post(`tuvi.php?tuoi=${conGiap}`);
        try {
            let response = await fetch(
                `https://api.kma-chatbot.com/tuvi.php?tuoi=${conGiap}`,
            );
            let responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    }

    async getCungHoangDao(cung) {
        return await this.axios.get(`cunghoangdao.php?cung=${cung}`);
    }

    dataConGiap() {
        return [
            { value: 'Tí' }, { value: 'Sửu' }, { value: 'Dần' }, { value: 'Mão' },
            { value: 'Thìn' }, { value: 'Tị' }, { value: 'Ngọ' }, { value: 'Mùi' },
            { value: 'Thân' }, { value: 'Dậu' }, { value: 'Tuất' }, { value: 'Hợi' },
        ];
    }

    dataCunghoangdao() {
        return [
            { value: 'Bạch Dương' }, { value: 'Kim Ngưu' }, { value: 'Song Tử' }, { value: 'Cự Giải' },
            { value: 'Sư Tử' }, { value: 'Xử Nữ' }, { value: 'Thiên Bình' }, { value: 'Thiên Yết' },
            { value: 'Nhân Mã' }, { value: 'Ma Kết' }, { value: 'Bảo Bình' }, { value: 'Song Ngư' },
        ];
    }
}
export default new API()

