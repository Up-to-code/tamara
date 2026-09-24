import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-financing-product-prices-header.html';
import body from '@/components/exact/ar-sa-financing-product-prices-body.html';
import footer from '@/components/exact/ar-sa-financing-product-prices-footer.html';
import inline from '@/components/exact/ar-sa-financing-product-prices.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
