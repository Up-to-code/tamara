import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-wixsana-header.html';
import body from '@/components/exact/en-sa-stores-wixsana-body.html';
import footer from '@/components/exact/en-sa-stores-wixsana-footer.html';
import inline from '@/components/exact/en-sa-stores-wixsana.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
