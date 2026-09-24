import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-credit-card-processing-for-businesses-header.html';
import body from '@/components/exact/en-sa-credit-card-processing-for-businesses-body.html';
import footer from '@/components/exact/en-sa-credit-card-processing-for-businesses-footer.html';
import inline from '@/components/exact/en-sa-credit-card-processing-for-businesses.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
