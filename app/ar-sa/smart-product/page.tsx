import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-smart-product-header.html';
import body from '@/components/exact/ar-sa-smart-product-body.html';
import footer from '@/components/exact/ar-sa-smart-product-footer.html';
import inline from '@/components/exact/ar-sa-smart-product.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
