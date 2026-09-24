import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-smart-plus-product-header.html';
import body from '@/components/exact/en-sa-smart-plus-product-body.html';
import footer from '@/components/exact/en-sa-smart-plus-product-footer.html';
import inline from '@/components/exact/en-sa-smart-plus-product.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
