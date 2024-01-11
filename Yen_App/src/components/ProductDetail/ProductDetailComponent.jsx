import React, { useState } from 'react';
import { Button, Col, Image, Rate, Row } from 'antd';
import { BuyNowBtn, CTABtn, CTAWrapper, CartBtn, DescContent, DescTitle, DescriptionWrapper, DiscountTag, NewPrice, OldPrice, PriceDetail, PriceWrapper, ProductDetailWrapper, ProductName, ProductStatus, QuantityButton, QuantityInput, QuantityWrapper } from './style';
import { success, warning, gray } from '../../color';
import * as ProductService from '../../services/ProductService';
import { minusIcon, plusIcon } from '../../components/IconComponent/IconComponent';
import { useQuery } from '@tanstack/react-query';

const ProductDetailComponent = ({ productId }) => {

    // fetch ProductDetail data function
    const fetchDetailsProduct = async ({ queryKey }) => {
        try {
            const [, id] = queryKey;
            const res = await ProductService.getDetailsProduct(id);
            // console.log('data1: ', res);
            return res;
        } catch (error) {
            console.error('Error fetching product details:', error);
            throw error;
        }
    };

    // fetch ProductDetail data by productId
    const { data: productDetails } = useQuery({
        queryKey: ['product-detail', productId],
        queryFn: fetchDetailsProduct,
        enabled: !!productId,
        retry: 1,
        retryDelay: 1000
    });
    // console.log('data2:', productDetails)

    const newPrice = productDetails?.data?.price * (1 - productDetails?.data?.discount / 100)
    console.log('nPrice', newPrice)

    const [numProduct, setNumProduct] = useState(1);
    const maxCountInStock = productDetails?.data?.countInStock;
    const onChange = (value) => {
        const val = value;
        // Regular expression to check if the input is a non-negative integer
        const isPositiveInteger = /^[1-9]\d*$/.test(val);

        if (isPositiveInteger) {
            setNumProduct(val);
        } else if (value >= maxCountInStock) {
            setNumProduct(maxCountInStock);
        }
    };

    const onKeyDown = (event) => {
        // Unaccepted keys list
        const invalidKeys = ['e', 'E', '+', '-', '.', ','];

        if (invalidKeys.includes(event.key)) {
            event.preventDefault();
        }
    };

    const handleChangeCount = (type, limited) => {
        if(type === 'increase') {
            if(!limited) {
                setNumProduct(numProduct + 1)
            }
        }else {
            if(!limited) {
                setNumProduct(numProduct - 1)
            }
        }
    }
    
    return (

        <Row>
            <Col span={8} style={{ paddingRight: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: 'fit-content' }}><Image style={{ objectFit: 'cover' }} preview={false} src={productDetails?.data?.image} />
                    <Row style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '12px' }}>
                        <Col span={4}><Image preview={false} src={productDetails?.data?.image} /></Col>
                        <Col span={4}><Image preview={false} src={productDetails?.data?.image} /></Col>
                        <Col span={4}><Image preview={false} src={productDetails?.data?.image} /></Col>
                        <Col span={4}><Image preview={false} src={productDetails?.data?.image} /></Col>
                        <Col span={4}><Image preview={false} src={productDetails?.data?.image} /></Col>
                    </Row></div>

            </Col>
            <Col span={14} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingTop: '6px', paddingLeft: '16px' }}>
                <div>
                    <ProductDetailWrapper>
                        <ProductName>{productDetails?.data?.name}</ProductName>
                        <ProductStatus>In Stock</ProductStatus> {/* Need to update InStock function (In Stock / Out of Stock) based on "countInStock" */}
                    </ProductDetailWrapper>
                    <div style={{ paddingTop: '12px', fontFamily: 'Poppins', fontSize: '16px', color: gray[500] }}><Rate allowHalf defaultValue={5} value={5} style={{ color: warning, paddingRight: '10px' }} />4 Reviews</div>
                    <div style={{ padding: '20px 0' }} >
                        <PriceWrapper>
                            <PriceDetail>
                                <OldPrice>${productDetails?.data?.price}</OldPrice>
                                <NewPrice>${newPrice}</NewPrice>
                            </PriceDetail>
                            <DiscountTag>-{productDetails?.data?.discount}%</DiscountTag>
                        </PriceWrapper>
                    </div>
                </div>
                <DescriptionWrapper>
                    <DescTitle>Description:</DescTitle>
                    <DescContent>{productDetails?.data?.description}</DescContent>
                </DescriptionWrapper>

                <CTAWrapper style={{ paddingTop: '30px' }}>

                    <QuantityWrapper>
                        <QuantityButton onClick={() => handleChangeCount('decrease',numProduct === 1)}>
                            {minusIcon}
                        </QuantityButton>
                        <QuantityInput type='number' onChange={onChange} onKeyDown={onKeyDown} max={maxCountInStock} min={1} value={numProduct} controls={false} size="small" />
                        <QuantityButton onClick={() => handleChangeCount('increase',  numProduct === productDetails?.data?.countInStock)}>
                            {plusIcon}
                        </QuantityButton>
                    </QuantityWrapper>

                    <CTABtn>
                        <CartBtn>
                            <Button size='large' style={{ background: success.default, fontFamily: 'Poppins', width: '100%', height: '100%', borderRadius: '100px' }} type='primary'>Buy now</Button>
                        </CartBtn>
                        <BuyNowBtn>
                            <Button size='large' style={{ fontFamily: 'Poppins', width: '100%', height: '100%', borderRadius: '100px' }} type='default'>Add to cart</Button>
                        </BuyNowBtn>
                    </CTABtn>

                </CTAWrapper>
            </Col>
        </Row>
    )
}

export default ProductDetailComponent