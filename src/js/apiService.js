export default class ApiService {
    constructor() {
        this.keyword = '';
        this.page = 1;
    }

    async searchImages() {
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.keyword}&page=${this.page}&per_page=12&key=23281495-b0d23e8712929a59a4f8b9c87`;
        this.page += 1;

        return (await (await fetch(url)).json()).hits;
    }
    get keywords() {
        return this.keyword;
    }
    set keywords(newKeyword) {
        this.keyword = newKeyword;
    }

    resPage() {
        this.page = 1;
    }
    
}