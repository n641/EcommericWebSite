import axios from "axios";
import { apiService } from "../../../../auth/interceptor";

export const GetRecentlyProducts = async () => {
    const { data } = await apiService({}).get(
        "/api/v1/products?limit=8&fields=title,price"
    );
    return data;
};