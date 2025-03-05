import PropType, { func } from "prop-types";

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import PropTypes from "prop-types";

export default function FilterableProductTable(
    { products, filterData,filterAction,inStockOnlyData,inStockOnlyAction}){
        return{
            <div>
                 <SearchBar
                        filterText={filterData}
                        inStockOnly={inStockOnlyData}
                        onFilterTextChange={filterAction}
                        onInStockOnlyChange={inStockOnlyAction}
                        />
                 <ProductTable
                        products={products}
                        filterText={filterData}
                        inStockOnly={inStockOnlyData}
                 />    
        </div>
    };
}

FilterableProductTable.PropType={
    products: PropTypes.object.isRequired,
    filterData: PropTypes.string.isRequired,
    filterAction: PropType.func.isRequired,
    inStockOnlyData: PropType.bool.isRequired,
    inStockOnlyAction: PropType.func.isRequired
};