


class AnalyticsDashboard {

  static async getPediatriciansCountByCity() {
      try {
        const response = await fetch('http://localhost:8000/pediatres/countByCity');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Erreur lors de la récupération des données du nombre de pédiatres par ville :', error);
        throw new Error('Erreur serveur');
      }
    }
    
  static async getCities() {
    try {
      const response = await fetch('http://localhost:8000/getAllCities');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des données du nombre de pédiatres par ville :', error);
      throw new Error('Erreur serveur');
    }
  }
      
  static async getCategories() {
    try {
      const response = await fetch('http://localhost:8000/getAllCategories');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des données du nombre de pédiatres par ville :', error);
      throw new Error('Erreur serveur');
    }
  }
    static async getNumberOfPediatricians() {
      try {
        const response = await fetch('http://localhost:8000/NumberOfpediatre');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Erreur lors de la récupération des données du nombre de pédiatres par ville :', error);
        throw new Error('Erreur serveur');
      }
    }
    static async getNumberOfpediatreByCity(cityValue:string) {
      try {
        const response = await fetch(`http://localhost:8000/NumberOfpediatreByCity/${cityValue}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Erreur lors de la récupération des données du nombre de pédiatres par ville :', error);
        throw new Error('Erreur serveur');
      }
    }
  
  
  
    static async getAveragePositiveScoreByCity(category:string) {
      try {
        const response = await fetch(`http://localhost:8000/getAveragePositiveScoreByCategory/${category}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Erreur lors de la récupération :', error);
        throw new Error('Erreur serveur');
      }
    }
    static async getNumberOfPositiveCommentsByCity(cityValue:string) {
      try {
        const response = await fetch(`http://localhost:8000/commentsPositiveCountByCity/${cityValue}`);
      
        const data = await response.json();  
        if (cityValue === '') {
          return;
        } else {
          return data;
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données du nombre de pédiatres par ville :', error);
        throw new Error('Erreur serveur');
      }
    }
    static async getNumberOfNegativeCommentsByCity(cityValue:string) {
      try {
        const response = await fetch(`http://localhost:8000/commentsNegativeCountByCity/${cityValue}`);
        const data = await response.json();
        if (cityValue === '') {
          return;
        } else {
          return data;
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données du nombre de pédiatres par ville :', error);
        throw new Error('Erreur serveur');
      }
    }


    static async getMedicalDataByFilters(city:String,category:String,speciality:String) {
      try {
        const response = await fetch(`http://localhost:8000/getMedicalDataByFilters/${city}/${category}/${speciality}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        throw new Error('Erreur serveur');
      }
    }


    static async  getMedicalDataCountsByCity(){
      try {
        const response = await fetch('http://localhost:8000/getMedicalDataCountsByCity');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        throw new Error('Erreur serveur');
      }
    }

    static async  getCategoryCountsByCity(category:String){
      try {
        const response = await fetch(`http://localhost:8000/getCategoryCountsByCity/${category}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        throw new Error('Erreur serveur');
      }
    }
    static async getMedicalPositifDataByFilters(city:String,category:String,speciality:String) {
      try {
        const response = await fetch(`http://localhost:8000/getPositifCountByFilters/${city}/${category}/${speciality}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        throw new Error('Erreur serveur');
      }
    }
    static async getMedicalNegatifDataByFilters(city:String,category:String,speciality:String) {
      try {
        const response = await fetch(`http://localhost:8000/getNegatifCountByFilters/${city}/${category}/${speciality}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        throw new Error('Erreur serveur');
      }
    }

    static async  getCategoryCountsByRegion(category:String){
      try {
        const response = await fetch(`http://localhost:8000/getCategoryCountsByRegion/${category}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        throw new Error('Erreur serveur');
      }
    }

  }
  export default AnalyticsDashboard