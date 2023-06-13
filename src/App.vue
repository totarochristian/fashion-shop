<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="row">
      <div class="col" v-for="(brand,index) in brands" :key="brand.id">
        <div class="card">
          <div class="card-title">
            <h3>{{ brand.name }}</h3>
          </div>
          <div class="card-img-top">
            <img :src="brand.logo" :alt="brand.name">
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item" :class="currentPage==1 ? 'disabled' : ''">
          <button class="page-link" @click="getData(currentPage-1)">Precedente</button>
        </li>
        <li class="page-item" :class="currentPage==elem ? 'active' : ''" v-for="elem in lastPage">
          <button class="page-link" @click="getData(elem)">{{elem}}</button>
        </li>
        <li class="page-item" :class="currentPage==lastPage ? 'disabled' : ''">
          <button class="page-link" @click="getData(currentPage+1)">Successivo</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from 'axios';
  export default{
    name: 'App',
    data(){
      return{
        title: 'Brands',
        brands: [],
        apiUrl: 'http://127.0.0.1:8000/api',
        imgBasePath: 'http://127.0.0.1:8000/storage/',
        currentPage: 1,
        lastPage: 1
      }
    },
    methods: {
      getData(numPage){
        axios.get(this.apiUrl+'/brands', {
          params: {
            'page': numPage
          }
        }).then((res) => {
          this.brands = res.data.results.data;
          this.currentPage = res.data.results.current_page;
          this.lastPage = res.data.results.last_page;
        });
      }
    },
    mounted(){
      this.getData(this.currentPage);
    }
  }
</script>

<style lang="scss" scoped>

</style>