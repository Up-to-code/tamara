import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-temu-header.html';
import body from '@/components/exact/en-sa-stores-temu-body.html';
import footer from '@/components/exact/en-sa-stores-temu-footer.html';
import inline from '@/components/exact/en-sa-stores-temu.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
