import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-mumin-header.html';
import body from '@/components/exact/en-sa-stores-mumin-body.html';
import footer from '@/components/exact/en-sa-stores-mumin-footer.html';
import inline from '@/components/exact/en-sa-stores-mumin.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
