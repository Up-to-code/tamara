import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-womensecret-header.html';
import body from '@/components/exact/en-sa-stores-womensecret-body.html';
import footer from '@/components/exact/en-sa-stores-womensecret-footer.html';
import inline from '@/components/exact/en-sa-stores-womensecret.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
