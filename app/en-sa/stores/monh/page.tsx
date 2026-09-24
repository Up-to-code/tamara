import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-monh-header.html';
import body from '@/components/exact/en-sa-stores-monh-body.html';
import footer from '@/components/exact/en-sa-stores-monh-footer.html';
import inline from '@/components/exact/en-sa-stores-monh.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
