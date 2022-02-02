//This is what tells the compiler to expect components to come out of .vue files

declare module "*.vue" {
    import { defineComponent } from "vue";
    const Component: ReturnType<typeof defineComponent>;
    export default Component;
}