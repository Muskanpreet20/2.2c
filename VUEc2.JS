const app = Vue.createApp({
    data() {
        return {
            featuredDesigners: [
                { name: 'Designer 1', specialty: 'Casual Wear', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero ac urna vehicula volutpat.' },
                { name: 'Designer 2', specialty: 'Evening Gowns', bio: 'Pellentesque placerat risus ut libero dictum, sed dapibus quam congue. Duis egestas elit eget vehicula volutpat.' },
                { name: 'Designer 3', specialty: 'Street Fashion', bio: 'Suspendisse nec odio eget justo vehicula dictum vel sit amet nisl. Fusce non laoreet enim.' }
            ],
            selectedDesigner: null
        };
    }
});

app.component('featured-designers', {
    props: ['designer'],
    template: `
        <div class="designer-card">
            <h2>{{ designer.name }}</h2>
            <p>Specialty: {{ designer.specialty }}</p>
            <button @click="showDesignerDetails(designer)">View Details</button>
        </div>
    `,
    methods: {
        showDesignerDetails(designer) {
            this.$emit('show-details', designer);
        }
    }
});

app.component('designer-details', {
    props: ['selectedDesigner'],
    template: `
        <div class="designer-details">
            <h2>{{ selectedDesigner.name }}</h2>
            <p>Specialty: {{ selectedDesigner.specialty }}</p>
            <p>Biography: {{ selectedDesigner.bio }}</p>
            <button @click="$emit('close')">Back to Designers</button>
        </div>
    `
});

app.mount('#app');
